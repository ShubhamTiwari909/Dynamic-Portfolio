import { revalidatePath } from 'next/cache.js';
import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from 'payload';

export const revalidatePage: CollectionAfterChangeHook = ({
	doc,
	previousDoc,
	req: { payload, context },
}) => {
	if (!context.disableRevalidate) {
		if (doc._status === 'published') {
			const path = doc.slug;

			payload.logger.info(`Revalidating page at path: ${path}`);

			revalidatePath(path);
		}

		// If the page was previously published, we need to revalidate the old path
		if (previousDoc?._status === 'published' && doc._status !== 'published') {
			const oldPath =
				previousDoc.slug;

			payload.logger.info(`Revalidating old page at path: ${oldPath}`);

			revalidatePath(oldPath);
		}
	}
	return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook = ({
	doc,
	req: { context },
}) => {
	if (!context.disableRevalidate) {
		const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`;
		revalidatePath(path);
	}

	return doc;
};

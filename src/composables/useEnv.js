
export function useEnv() {

    return {
        api: {
            base: import.meta.env.VITE_API_BASE,
            collectionPrefix: import.meta.env.VITE_API_COLLECTION_PREFIX,
            getFilePath: function(collectionId, recordId, file) {
                return `${this.base}/api/files/${collectionId}/${recordId}/${file}`;
            }
        }
    };

}
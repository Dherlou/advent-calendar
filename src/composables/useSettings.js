import { useEnv } from '@/composables/useEnv'
import { usePocketBase } from '@/composables/usePocketBase';

export async function useSettings() {

    const env = useEnv();
    const pb = await usePocketBase();

    return (await pb.collection(env.api.collectionPrefix + 'settings').getList()).items[0];

}
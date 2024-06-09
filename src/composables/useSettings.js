import { useEnv } from './useEnv'
import { usePocketBase } from './usePocketBase';

export async function useSettings() {

    const env = useEnv();
    const pb = await usePocketBase();

    return (await pb.collection(env.api.collectionPrefix + 'settings').getList()).items[0];

}
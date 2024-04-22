import PocketBase from 'pocketbase';
import { useEnv } from './useEnv'

export async function useSettings() {

    const env = useEnv();
    const pb = new PocketBase(env.api.base);

    return (await pb.collection(env.api.collectionPrefix + 'settings').getList()).items[0];

}
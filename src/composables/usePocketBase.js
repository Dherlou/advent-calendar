import PocketBase from 'pocketbase';
import { useEnv } from './useEnv';

export async function usePocketBase() {

    const env = useEnv();
    const pb = new PocketBase(env.api.base);

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        pb.authStore.isValid && await pb.collection('users').authRefresh();
    } catch (_) {
        // clear the auth store on failed refresh
        pb.authStore.clear();
    }

    return pb;

}
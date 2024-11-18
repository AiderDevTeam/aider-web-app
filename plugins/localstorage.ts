export const getItem = (item: string): string | null | undefined =>{
    if (process.client) {
        return localStorage.getItem(item);    
    } else {
        return undefined;
    }
}

export const setItem = (item: string, value: string): void | undefined =>{
    if (process.client) {
        localStorage.setItem(item, value);
    }
}

export const removeItem = (item: string): void | undefined =>{
    if (process.client) {
        localStorage.removeItem(item);
    }
}

export default defineNuxtPlugin(() => {
    inject('getItem', getItem);
    inject('setItem', setItem);
    inject('removeItem', removeItem);
});
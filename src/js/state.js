// Simple state management for onboarding flow
const STORAGE_KEY = 'onboarding_flow';

export function getState() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
        console.warn('Failed to parse onboarding state:', e);
        return {};
    }
}

export function setState(patch) {
    try {
        const currentState = getState();
        const newState = { ...currentState, ...patch };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        return newState;
    } catch (e) {
        console.warn('Failed to save onboarding state:', e);
        return getState();
    }
}

export function clearState() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.warn('Failed to clear onboarding state:', e);
    }
}

export function getSelectedAccounts() {
    return getState().selectedAccounts || [];
}

export function setSelectedAccounts(accounts) {
    return setState({ selectedAccounts: accounts });
}

export function getAccountAliases() {
    return getState().accountAliases || {};
}

export function setAccountAliases(aliases) {
    return setState({ accountAliases: aliases });
}

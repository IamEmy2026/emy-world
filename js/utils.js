const Storage = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    load(key, defaultValue) {
        const data = localStorage.getItem(key);

        if (data === null) {
            return defaultValue;
        }

        try {
            return JSON.parse(data);
        } catch {
            return defaultValue;
        }
    }
};


// =======================================
// SAFE ELEMENT FINDER
// =======================================

function get(id){

    return document.getElementById(id);

}

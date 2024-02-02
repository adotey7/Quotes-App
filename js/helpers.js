import "regenerator-runtime/runtime";
import "core-js/stable";

export const fetchURL = async function(url){
try {
    const res = await fetch(url);

    // Guard clause
    if(!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();
    return data
} catch (error) {
    throw error;
}
}
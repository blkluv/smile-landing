//https://stackoverflow.com/a/40031979/9014097
function buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}
export async function sha256(input) {
    let inputStr = new String(input)
    inputStr = inputStr.toLowerCase();
    inputStr = inputStr.split(" ").join("");

    const myText = new TextEncoder().encode(inputStr);
    const myDigest = await crypto.subtle.digest(
        {
            name: 'SHA-256',
        },
        myText // The data you want to hash as an ArrayBuffer
    );

    const res = buf2hex(myDigest);
    return res
}
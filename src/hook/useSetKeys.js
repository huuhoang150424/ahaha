export default function useSetKeys(Lengths) {
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbers=['1','2','3','4','5','6','7','8','9','0']
    let key=''
    for(let i=0;i<Lengths;i++) {
        const randomChar=Math.floor(Math.random()*chars.length)
        const randomNumbers=Math.floor(Math.random()*numbers.length)
        const Typekey=Math.random()<0.5 ? 'num':'char'
        if (Typekey==='num') key+=numbers[randomNumbers]
        else key+=chars[randomChar]
    }
    return key
}

const temperaturaC = [0, 10, 20, 30];
const temperaturaF = temperaturaC.map(temperaturaC => {
    return temperaturaC * 1.8 + 32;
});
console.log(temperaturaF);
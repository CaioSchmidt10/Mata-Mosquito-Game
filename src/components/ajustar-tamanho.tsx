export function TamanhoAleatorio() {
    const classeIndex = Math.floor(Math.random() * 3);
    const sideIndex = Math.floor(Math.random() * 2);

    const classes = ['mosquito1', 'mosquito2', 'mosquito3'];
    const sides = ['ladoA', 'ladoB'];

    return {
        classe: classes[classeIndex],
        side: sides[sideIndex]
    };
}

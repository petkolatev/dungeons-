function exctractFileType(input) {
    let file = input.split('\\').pop()
    let lastDotIndex = file.lastIndexOf('.')

    let fileName = file.substring(0, lastDotIndex);
    let typeFile = file.substring(lastDotIndex + 1)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${typeFile}`);

}
exctractFileType('C:\\Internal\\training-internal\\Template.asd.pptx')
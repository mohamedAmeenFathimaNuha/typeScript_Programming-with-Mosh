let  message='abc';
let endwithC=message.endsWith('c');

let message1;
let endsWithC=(<string>message).endsWith('c');
let alternativeWay=(message as string).endsWith('c');
const Nylas = require('nylas');  
 
Nylas.config({
    clientId: 'a9t5rqdup3kj3wjuynk03s7mb',
    clientSecret: 'bsn0fb2dqmgx300lhcqv2ar4d',
});  
 

const nylas = Nylas.with('AUT4ZsL6AajrlTOQNaqjkD3bOJghBx');


// const listOfIds =
// nylas.messages.search("from:flipkart.com").then(messages => {
//     for (let message of messages) {
//         console.log(message.subject);
//     }  
// });


nylas.messages.search(["from:flipkart.com"]).then(messages => {
    for (let message of messages) {
        console.log(message.subject);
    }  
});



// nylas.account.get().then(account =>{
//     if (account.organizationUnit == 'label') {
//         nylas.labels.list({}).then(labels => {
//             console.log("This account contains the following labels:")
//             for (const label of labels) {
//               console.log(`Name: ${label.displayName} | ID: ${label.id}`);
//             }
//           });
//     }
// });

// nylas.threads.search("Flipkart ").then(threads => {
//     for (let thread of threads) {
//         console.log(thread.subject);
//     }
// });

// nylas.threads.list({limit: 3} , () =>

//     nylas.messages.search("from:flipkart.com")
//         // {
//         //     for (let message of messages) {
//         //         console.log(message.subject);
//         //     }
//         .then(threads => {
//             for (let thread of threads) {
//                 console.log(thread.subject);
//             }
//         })

//     );


// nylas.threads.list({unread: true, limit: 200}).then(threads =>{
//     for (let thread of threads) {
//         console.log(thread.subject);
//     }
// });  
 
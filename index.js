const Nylas = require('nylas');  
const { Label } = require('nylas/lib/models/folder');

 
Nylas.config({
    clientId: 'a9t5rqdup3kj3wjuynk03s7mb',
    clientSecret: 'bsn0fb2dqmgx300lhcqv2ar4d',
});  
 

const nylas = Nylas.with('AUT4ZsL6AajrlTOQNaqjkD3bOJghBx');

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


const labelName = 'Ecom-recepits';
let labelToUpdate;

nylas.account.get().then(account => {
    if (account.organizationUnit == 'label') {
      nylas.labels.forEach({}, checkLabel, createAndApplyLabel);
    }
});


function checkLabel (label) {
    if (label.displayName == labelName) {
        labelToUpdate = label;
    };
}
function createAndApplyLabel () {
    if ( !labelToUpdate ) {
        console.log(`Creating New Label: ${labelName}`)
        labelToUpdate = new Label(nylas, {displayName: labelName});
        labelToUpdate.save().then(label => {
            addLabelToMostRecentMessage(label);
        });
    } else {
        console.log(`${labelName} already exists!`)
        addLabelToMostRecentMessage(labelToUpdate);
    }
}
function addLabelToMostRecentMessage (label) {
    nylas.messages.search(["from:flipkart.com"]).then(msg => {
        for (let msgs of msg){
      console.log(`${label.displayName} applied to the most recent email.`)
      // Add the label to the most recent email and save it.
      msgs.labels.push(label);
        

      msgs.save().then(savedMsg => {
        console.log(`Subject: ${savedMsg.subject}`);
        //Gmail includes a number of default labels,
        // including Inbox, Important, Trash, Spam, and more
        console.log("This email contains the following labels")
        console.log(savedMsg.labels);
      })
    }
    })
}




 
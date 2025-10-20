function checkPass(innput){
    let pass = "s3cr3t!P@ssw0rd"
    if (innput === pass){
        console.log('Welcome');
    } else{
        console.log('Wrong password!');
    }
}

checkPass("s3cr3t!P@ssw0rd")
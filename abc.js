function call(){
    var a = document.cookie;
    console.log("before: "+a);

    document.cookie += "name=pk; company=afs";


    var b = document.cookie;
    console.log("after: "+b);
}
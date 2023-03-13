function shirt() {
    document.getElementById("new").innerHTML = "Nguyên liệu chủ yếu là vải lanh,chất mền, bền,giữ được độ mới lau tiền 1500000 vnđ"

}

function baby() {
    document.getElementById("nen").innerHTML = "nguyn lieu lam tu cac soi vay lanh va hat liu lo" + "<br>" + "gia 2000000";

}

function sao() {
    document.getElementById("um").innerHTML  = "nguyen lieu tu nua gia " + "<br>" + "gia :300000";

}

function tim() {
    document.getElementById("ary").innerHTML   = "nguyen lieu tu nua gia" + "<br>" + "gia :200000 vnd";

}

function run() {
    document.getElementById("vy").innerHTML  = " nguyen lieu :than lam tu go lim, cac dot lam tu nua bac" + "<br>" + "gia:5000000";

}

function go() {
    document.getElementById("nos").innerHTML =  "nguyen lieu : dong, vo tu than nua" + "<br>" + "gia: 100000vnđ";
}

function tom() {

    document.getElementById("to").innerHTML =50000+'vnđ'
}

function get() {
    document.getElementById("noi").innerHTML = 35000 +"vnđ"
}

function add(){
    let product=["áo","váy","sáo trúc","sáo","khèn","khèn môi"]
    let pcie=["1500000","2000000","300000","500000","5000000","200000"];
    let string = document.getElementById("tin").value;
    let str=document.getElementById("io").value;
    let index=0;
    let total=0;
    let result=""
    for (let i=0;i<product.length; i++){
        if(string===product[i]){
            index=i
            for (let j=0;j<pcie.length;j++){
                if(index===j){
                    result=pcie[j]

                }
                total=result*str;
            }

        }

    }
   document.getElementById("u").innerHTML=total;

}
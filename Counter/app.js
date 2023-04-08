let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList ;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0){
            value.style.color = "rgba(245, 42, 42, 0.932)";
        }
        if(count > 0){
            value.style.color = "rgba(7, 153, 7, 0.89)";
        }
        if(count == 0){
            value.style.color = "rgba(51, 53, 51, 0.932)";
        }
        value.textContent = count;
        console.log(e.currentTarget.classList);
    });
});

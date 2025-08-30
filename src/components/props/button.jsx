function buttons(pro){
    return(
        <button>
        onclick={pro.onclick}
          {pro.label}
        </button>
         
    )
}
export default buttons
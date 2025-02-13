const handleSpinner = (isLoad) => {
    if(isLoad){
        document.getElementById('loadSpinner').classList.remove('hidden')
    }else{
        document.getElementById('loadSpinner').classList.add('hidden')

    }
}
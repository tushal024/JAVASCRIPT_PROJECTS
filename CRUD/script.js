





    let tt = ""
    let age = ""
    let obj = {}
    let arr = []

    document.getElementById("ff").addEventListener("submit", (e) => {
        e.preventDefault();
        tt = document.getElementById("inp").value
        age = document.getElementById("ag").value

        obj = {

            user: tt,
            age
        }

        document.getElementById("st").innerHTML = `       <tr>
                <td>1</td>
                <td>   ${tt}  </td>
                <td>   ${age} </td>
                 <td><button onclick="ss()">EDIT</button></td>
            <td><button>DELETE</button></td> 
            </tr> `
        console.log(obj);

        arr.push(obj)
        console.log(arr);
    })
    
    function ss() {
        document.getElementById("ff").reset();
    }

    let ans = arr.filter((e) => {
        return "hello"
    })

    document.getElementById("sss").innerHTML = ans

    // op()
    // console.log(ans);








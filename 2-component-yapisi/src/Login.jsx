import React from "react"

export const users = [
    {
        username: "enes",
        password: "1"
    },

    {
        username: "mahmut",
        password: "2"
    }
]




function Login() {
    return (
        // fragment 

        <div>
            <div>

                <p>Kullanıcı Adınız</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>

            <br />
            <button>Giriş Yap</button>
        </div>

    )
}

export default Login

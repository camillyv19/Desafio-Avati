
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Card, notification } from 'antd';
import "./login.css";
import ilustracao from "./img/ilustracao.png";


export function Login(){

    const schema = yup.object({
        email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
        senha: yup.string().min(6, "Senha Inválida").required("Senha obrigatória"),
     });

    const { register, handleSubmit, formState: { errors} } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema)
    })

    function entrar(values) {
        
        const user = {
            email: "admin@gmail.com",
            senha: "123456"
        }

        if(values.email === user.email && values.senha === user.senha){
            notification.open({
                type: "success",
                message: 'Usuário Autenticado'
              });
        }
        else{
            notification.open({
                type: "error",
                message: 'Usuário Não Encontrado'
              });  
        }
    }

    return(
        <div className="layout">
           
            <Card className="card">
              <img className= "image" src={ilustracao}  alt="Ilustração"></img>
              <p className="login-name">Login</p>
                <form 
                    className= "login-form"
                    onSubmit={handleSubmit(entrar)}
                    >
                        <div className="section-input">
                            <label 
                            className={errors?.email?.message && "label-error"}>
                                E-mail
                            </label>
                            <input 
                            className={errors?.email?.message && "input-error"}
                            {...register("email")} 
                            name="email"
                            placeholder="Digite seu e-mail"
                        
                            />
                            {errors?.email?.message && (
                                <p className="text-error">
                                {errors?.email?.message}
                                </p>  
                            )}
                        </div>

                        <div className="section-input">
                            <label
                            className={errors?.email?.message && "label-error"}>
                                Senha
                            </label>
                            <input 
                            className={errors?.email?.message && "input-error"}
                            {...register("senha")} 
                            name="senha"
                            type="password"
                            placeholder="Digite sua senha"
                            
                            />
                            {errors?.senha?.message && (
                                <p className="text-error">
                                {errors?.senha?.message}
                            </p>
                            )}
                            
                        </div>
                    <button>Entrar</button>
                </form>
            </Card>
        </div>
    )
}
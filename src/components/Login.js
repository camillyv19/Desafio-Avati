

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Card, notification } from 'antd';
import "./login.css";


export function Login(){

    const schema = yup.object({
        email: yup.string().email("e-mail inválido").required("e-mail obrigatório"),
        senha: yup.string().min(6, "Senha Inválida").required("Senha obrigatória"),
     });

    const { register, handleSubmit, formState: { errors} } = useForm({
       
        resolver: yupResolver(schema)
    })

    function enviar(values) {
        console.log(values)
        notification.open({
            message: 'titulo',
            description: 'mensagem',
          });
    }

    return(
        <div className="layout">
            <Card className="card">
                <form 
                    className= "login-form"
                    onSubmit={handleSubmit(enviar)}
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
                    <button>Enviar</button>
                </form>
            </Card>
        </div>
    )
}
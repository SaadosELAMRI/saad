import { useForm } from "react-hook-form";

import styles from "../styles/Forms.module.css";

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit=async(values,e)=>{
        // Si le résultat est arrivé et bon (pas d'erreur survenue) la promesse sera résolved :
        console.log(values)
        await new Promise((resolve)=> setTimeout(resolve,1000))
        // Mettre à zero valeur du formulaire
        e.target.reset();
      }

    return(
        <div className={styles.container} >
            <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)} >
                <h1><span className={styles.letter} >M</span>e Contacter</h1>
                <div className={styles.credentials}>
                    <div className={styles.credentialsErrorsWrapper} >
                        <input type="text" placeholder="Nom*" name="nom" required
                        // Validation du nom (requis, doit au moins comporter 2 caractères et au max 25 caractères)
                        {...register('nom', {
                                            required: 'Votre nom est requis',
                                            minLength: {
                                                value: 2,
                                                message: 'Nom trop court'
                                            },
                                            maxLength:{
                                                value:25,
                                                message:"Nom trop long"
                                            }
                                        })}
                        />
                        {/* Apparition du message d'erreur seulement lorsque y'a un erreur niveau nom */}
                        {errors.nom &&
                            <div className={styles.erreur}>
                                {errors.nom.message}
                            </div>
                        }
                    </div>

                    <div className={styles.credentialsErrorsWrapper}>
                        <input type="text" placeholder="Prénom*" name="prenom" required
                            // Validation du prénom (requis, doit au moins comporter 2 caractères et au max 25 caractères)
                            {...register('prenom', {
                                required: 'Votre prénom est requis',
                                minLength: {
                                    value: 2,
                                    message: 'Prénom trop court'
                                },
                                maxLength:{
                                    value:25,
                                    message:"Prénom trop long"
                                }
                            })}
                        />
                        {/* Apparition du message d'erreur seulement lorsque y'a un erreur niveau prénom */}
                        {errors.prenom &&
                            <div className={styles.erreur}>
                                {errors.prenom.message}
                            </div>
                        }
                    </div>
                </div>
                <input placeholder="Email*" name="email" required type="email"
                        // Validation de l'email (requis, doit correspondre au format d'un email)
                            {...register('email', {
                                required: 'Votre email est requis',
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                    message: 'Cet email est invalide'
                                }
                            })}
                />
                {/* Apparition du message d'erreur seulement lorsque y'a un erreur niveau email */}
                {errors.email &&
                        <div className={styles.erreur}>
                            {errors.email.message}
                        </div>
                    }
                <textarea placeholder="Message*" name="message"  required
                    {...register('message', {
                         // Validation du message (requis, doit au moins comporter 4 caractères et au max 300 caractères)
                        required: 'Message requis',
                        minLength: {
                            value: 4,
                            message: 'Message trop court'
                        },
                        maxLength:{
                            value:300,
                            message:"Message trop long"
                        }
                    })}
                />
                {/* Apparition du message d'erreur seulement lorsque y'a un erreur niveau message */}
                {errors.message &&
                        <div className={styles.erreur}>
                            {errors.message.message}
                        </div>
                    }
                {/* Boutton "Contacter" */}
                <div className={styles.buttonContainer}>
                    <button type="submit" >Contacter</button>
                </div>
            </form>
        </div>
    )
}
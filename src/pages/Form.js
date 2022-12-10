import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = () => {
    const schema = yup.object().shape({
        fullname: yup.string().required('Username is Required!'),
        email: yup.string().email('Email Should Be Valid Email').required('Correct Email is Required!'),
        age: yup.number('Age Should be number').integer('Age Should Be Integer').min(18, 'Age Should Be grater then 17').required('Age is Required!'),
        password: yup.string().min(4).max(20).required('Password is Required!'),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Confirm Password Not Metching').required('Confirm Password is Required!'),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const formSubmit = (data) => {
        console.log(data);
    }

    return <div className="form">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <input type="text" placeholder="Your Username" {...register("fullname")} />
                <div>
                    <span>{errors.fullname?.message}</span>
                </div>
            </div>
            <div>
                <input type="text" placeholder="Your Email" {...register("email")} />
                <div>
                    <span>{errors.email?.message}</span>
                </div>
            </div>
            <div>
                <input type="number" placeholder="Age" {...register('age')} />
                <div>
                    <span>{errors.age?.message}</span>
                </div>
            </div>
            <div>
                <input type="password" autoComplete="true" placeholder="Password" {...register('password')} />
                <div>
                    <span>{errors.password?.message}</span>
                </div>
            </div>
            <div>
                <input type="password" autoComplete="true" placeholder="Confirm Password" {...register('confirmPassword')} />
                <div>
                    <span>{errors.confirmPassword?.message}</span>
                </div>
            </div>
            <button>Submit</button>
        </form>
    </div>
}
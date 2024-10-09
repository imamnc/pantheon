import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

interface HomeProps { }

const Dashboard: React.FC<HomeProps> = () => {

    // Use translations
    const { t } = useTranslation()

    // Get page props
    const { props }: any = usePage()

    // Define data sample
    const framework: string = "Pantheon"
    const laravel: string = "Laravel"
    const react: string = "React"
    const language: string = "Typescript"

    return <>
        <div className="row justify-content-center animate__animated animate__fadeIn">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body py-5">
                        <h1 className="mb-7">
                            <span className="me-2">
                                Hello <strong className="text-primary">{props.auth.user.name}</strong>,
                            </span>
                            <p className="mt-4">
                                <span>{t('dashboard.welcome')} {framework} (<span className="text-danger">{laravel}</span> + <span className="text-info">Inertia</span> + <span className="text-primary">{react}</span> + <span className="text-dark">{language}</span>)!</span>
                            </p>
                        </h1>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo consequuntur quasi repellat amet corrupti quidem labore aliquid explicabo possimus iusto, nemo, dolor tempora autem voluptas a veniam dolore eligendi accusamus laudantium! Optio voluptatum enim quis animi numquam. Dicta iure vero et iste. Doloremque obcaecati, atque fuga officia voluptas iusto commodi, earum sint vel ullam necessitatibus cupiditate porro fugit itaque id similique rerum! Voluptas doloribus dicta, doloremque nisi numquam velit repudiandae cumque, cum dolorem sed commodi consequuntur eos odio laboriosam eaque illo? Accusamus ratione inventore earum fugiat cum provident. Praesentium, corporis qui et tempore consectetur, voluptates fugiat provident deserunt sequi ea placeat neque, expedita nulla accusantium. Saepe, asperiores beatae! Et, repudiandae magnam maxime velit nesciunt, aperiam nemo beatae doloremque nisi aut nobis laudantium inventore quos in veniam? Laboriosam doloremque quis voluptatum, natus fuga dolorem alias ipsum dolorum dolores tempore molestias excepturi reprehenderit minima suscipit ex culpa debitis provident voluptatibus animi earum ipsa expedita blanditiis. Cupiditate, consequatur tempore. Culpa odio porro modi ratione quos est impedit at. Quaerat incidunt itaque possimus corporis totam laudantium asperiores alias vero, ut, sapiente nesciunt cupiditate nisi doloribus neque magni ipsum debitis maxime cum error optio ab ratione sunt unde. Accusamus nesciunt voluptatum adipisci qui laboriosam?</p>
                        <div className="mt-7">
                            <Link href="greet" className="btn btn-primary">Greet Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Dashboard;

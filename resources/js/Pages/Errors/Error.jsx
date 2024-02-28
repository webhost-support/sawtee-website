import Page404 from "@/Components/Frontend/page404";
import MainLayout from "../Frontend/Layout/MainLayout";
import { Head } from "@inertiajs/react";

const Error = ({ status, message }) => {
    return (
        <MainLayout>
            <Head>
                <title>{message}</title>
            </Head>
            <Page404 status={status} message={message} />
        </MainLayout>
    );
};

export default Error;

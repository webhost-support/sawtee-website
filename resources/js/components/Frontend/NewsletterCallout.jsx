import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import PrimaryButton from '../Backend/PrimaryButton';
import { Input } from '../ui/input';

export default function NewsletterCallout() {
  return (
    <div className="rounded-lg bg-sky-100 px-6 py-6 dark:bg-sky-900 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:flex xl:items-center">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-sky-700 dark:text-sky-300/80 sm:text-3xl sm:leading-9">
          Receive the latest publication releases, events and monthly
          newsletter.
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-sky-700/90 dark:text-sky-400/80">
          Do you want to get notified? Sign up for our newsletter and you'll be
          among the first to find out about new publication releases, events and
          monthly newsletter.
        </p>
      </div>
      <div className="mt-8 sm:w-full sm:max-w-md xl:ml-8 xl:mt-0">
        <div className="mt-3 sm:ml-3 sm:mt-0 sm:flex-shrink-0">
          <SubscribeForm />
        </div>
        <p className="mt-3 text-sm leading-5 text-sky-700/90 dark:text-sky-400/80">
          We care about the protection of your data. Your data is safe and never
          used for commercial purposes.
        </p>
        {/* <p class="text-sm leading-5 text-indigo-200">
          In order to receive the notifications, you must give permission
          sufficient to your web browser.
        </p> */}
      </div>
    </div>
  );
}

export const SubscribeForm = ({ ...rest }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
  });

  const [message, setMessage] = useState(null);

  const submit = e => {
    e.preventDefault();
    post(route('subscription.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setMessage(`${data.email} has subscribed successfully.`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        reset('email');
      },
      onError: errors => {
        console.log(errors);
      },
    });
  };

  return (
    <form
      className="mt-5 flex w-full flex-col gap-4"
      onSubmit={submit}
      {...rest}
    >
      <Input
        type="email"
        id="email"
        name="email"
        className="h-9 p-3 text-sm"
        placeholder="Enter your email address"
        value={data.email}
        onChange={e => {
          setData('email', e.target.value);
        }}
      />
      {errors.email && <InputError mt={2}>{errors.email}</InputError>}

      <PrimaryButton
        type="submit"
        variant="primary"
        isLoading={processing}
        className="flex w-full items-center justify-center bg-sky-800 px-5 py-3 text-base font-medium text-white saturate-150 backdrop-blur-sm transition duration-150 ease-in-out hover:opacity-80 dark:bg-[rgba(0,0,0,0.4)] dark:hover:bg-[rgba(0,0,0,0.6)]"
      >
        Subscribe
      </PrimaryButton>

      {message && <p className="text-sm text-lime-400">{message}</p>}
    </form>
  );
};

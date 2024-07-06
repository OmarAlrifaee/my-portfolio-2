import { Header } from "@/components";
import { Button } from "@/components/ui/button";
import { sendForm } from "@emailjs/browser";
import { useCallback, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null!);
  const { toast } = useToast();
  /* funcs */
  const hundleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        sendForm(
          import.meta.env.VITE_SERVICES_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUPLIC_KEY
        );
        e.currentTarget.reset();
        toast({
          title: "Success",
          description: "Your Message Was Sent Successfully",
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Something Went Wronge Please Try Agine",
        });
      }
    },
    [toast]
  );
  const Head = () => (
    <Helmet>
      <title>Contact</title>
    </Helmet>
  );
  /* layouts */
  const FormContainer = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      className="py-10 mt-10 bg-card-light dark:bg-card-dark border dark:border-light-text-muted border-dark-text-muted rounded-xl origin-top"
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
  const Form = () => (
    <form
      className="px-5 flex flex-col gap-6"
      onSubmit={hundleSubmit}
      ref={formRef}
    >
      <div className="relative mb-5">
        <div className="absolute top-[50%] -translate-y-1/2 flex gap-2">
          <div className="h-3 w-3 rounded-full border-[1px] border-[#F63636] bg-[#FF6057] "></div>
          <div className="h-3 w-3 rounded-full border-[1px] border-[#F6C136] bg-[#FDBC2E] "></div>
          <div className="h-3 w-3 rounded-full border-[1px] border-[#53CC28] bg-[#27C840] "></div>
        </div>
        <p className="font-bold text-lg text-dark-text-muted dark:text-light-text-muted mx-auto text-center font-Poetsen">
          New Message
        </p>
      </div>
      <div className="flex items-center gap-3 pb-5 border-b border-b-light-text-muted dark:border-b-dark-text-muted">
        <label
          htmlFor="email"
          className="dark:text-light-text text-dark-text font-semibold text-[14px] min-w-16"
        >
          Email:
        </label>
        <input
          type="email"
          className="flex-1 bg-transparent focus:outline-none border-none dark:text-light-text text-dark-text placeholder:text-dark-text-muted placeholder:dark:text-light-text-muted placeholder:text-sm"
          placeholder="Enter Your Email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="flex items-center gap-3 pb-5 border-b border-b-light-text-muted dark:border-b-dark-text-muted">
        <label
          htmlFor="name"
          className="dark:text-light-text text-dark-text font-semibold text-[14px] min-w-16"
        >
          Name:
        </label>
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none border-none dark:text-light-text text-dark-text placeholder:text-dark-text-muted placeholder:dark:text-light-text-muted placeholder:text-sm"
          placeholder="Enter Your Name"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="flex items-center gap-3 pb-5 border-b border-b-light-text-muted dark:border-b-dark-text-muted">
        <label
          htmlFor="sub"
          className="dark:text-light-text text-dark-text font-semibold text-[14px] min-w-16"
        >
          Subject:
        </label>
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none border-none dark:text-light-text text-dark-text placeholder:text-dark-text-muted placeholder:dark:text-light-text-muted placeholder:text-sm"
          placeholder="Enter Your Subject"
          id="sub"
          name="sub"
          required
        />
      </div>
      <textarea
        className="focus:outline-none border-none rounded-lg p-5 dark:text-light-text bg-transparent dark:bg-[#070B15] min-h-[200px] text-dark-text placeholder:text-dark-text-muted placeholder:dark:text-light-text-muted placeholder:text-sm"
        placeholder="Enter Your Message"
        id="message"
        name="message"
        required
      />
      <motion.div
        className="md:ms-auto md:mx-0 mx-auto md:w-fit w-full"
        whileTap={{ scale: 1.1 }}
      >
        <Button
          type="submit"
          size={"lg"}
          className="font-bold font-Poetsen block w-full"
        >
          Send
        </Button>
      </motion.div>
    </form>
  );
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Head />
      <Header description="Let’s build something awesome." title="Contact" />
      <FormContainer>
        <Form />
      </FormContainer>
    </section>
  );
};

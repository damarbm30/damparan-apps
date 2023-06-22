import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
      navigate("/");
    }

    if (!timeLeft) return;

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // CLEAR INTERVAL TO AVOID MEMORY LEAKS
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <section className="relative">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg border-4 border-primary p-8 md:w-fit">
        <h1 className="text-2xl font-black text-primary">Error 404: Page Not Found</h1>
        <p className="text-lg font-bold text-body">Anda akan kembali ke Home dalam {timeLeft} detik</p>
      </div>
    </section>
  );
};
export default Missing;

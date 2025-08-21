import Pera from "@/components/common/Pera";
import SmallHeading from "@/components/common/SmallHeading";
import { targetInputs } from "@/components/helper/Helper2";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddTarget() {
  interface TargetFormValues {
    [key: string]: FormDataEntryValue;
  }

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement;
  }

  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // All values from the form
    const values: TargetFormValues = Object.fromEntries(formData.entries());
    // 🟢 Yahan variable me data aagaya
    console.log(values); // Ya isko apne variable ya API call me use karein
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-[6px]">Add Target</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] !rounded-0 !p-0 h-[90%] overflow-y-auto">
        <DialogHeader className="px-4 py-5 border-b border-grayE4">
          <SmallHeading title="Add Targets" />
        </DialogHeader>
        <div className="px-4 py-3.5">
          <SmallHeading title="Set Targets for Wade Warren ( FE)" />
          <Pera
            title="Defines the performance targets for upcoming period"
            className="!text-xs !text-[#030712] !font-normal"
          />
          <div className="mt-[30px]">
            <form onSubmit={handleSubmit}>
              {targetInputs.map((input) => (
                <div key={input.id} className="mb-4">
                  <label htmlFor={input.id} className="block mb-2">
                    <SmallHeading title={input.heading} />
                  </label>
                  <div>
                    <input
                      type={input.type}
                      name={input.id}
                      placeholder={input.placeholder}
                      className="w-full border px-3 py-2 rounded-[6px] border-grayE4 focus:outline-none text-sm text-[#18181B] font-medium leading-[142%] -tracking-[0.28px]"
                    />
                    <Pera
                      title={input.msg}
                      className="!text-xs !leading-[200%] !font-normal overflow-hidden sm:max-w-[360px] truncate"
                    />
                  </div>
                </div>
              ))}
              <div className="mt-[55px] py-3 px-5 border-t border-grayE4 flex justify-end gap-2">
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="rounded-[6px] bg-transparent"
                  >
                    Cancel
                  </Button>
                </DialogTrigger>
                <Button className="rounded-[6px]" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

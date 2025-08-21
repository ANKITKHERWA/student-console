import Pera from "@/components/common/Pera";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SmallHeading from "@/components/common/SmallHeading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddTarget() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {/* <PrimaryBtn title="Add Target" className="w-max" /> */}
          <Button className="rounded-[6px]">Add Target</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] !rounded-0 !p-0">
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
              <form action=""></form>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

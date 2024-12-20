import { inputlayout } from "@/types/inputLayout";

export default function Form(props: any) {

    return (
        <div>
            <div className="grid grid-cols-3 gap-3">
                {inputlayout(props)}
            </div>
        </div>
    );
}

import * as Collapsible from "@radix-ui/react-collapsible";
import { Maximize2 } from "lucide-react";
import { UploadWidgetTitle } from "./upload-widget-title";

export function UploadWidgetMinimizedButton() {
	return (
		<Collapsible.Trigger className="w-90 bg-white/2 text-white/90 py-3 px-5 flex items-center justify-between">
			<UploadWidgetTitle />
			<Maximize2 strokeWidth={1.5} className="size-4" />
		</Collapsible.Trigger>
	);
}

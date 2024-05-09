import { useGenerateStore } from "../../_store/useGenerateStore";
import { usePaletteParams } from "../../_utils/params/usePaletteParams";

export const useGenerateHistory = () => {
  const setPaletteParams = usePaletteParams();

  const updateHistory = useGenerateStore((state) => state.updateHistory);
  const history = useGenerateStore((state) => state.history);
  const pointer = useGenerateStore((state) => state.pointer);

  const hasUndo = pointer < history.length - 1;
  const hasRedo = pointer > 0;

  const undo = () => {
    const palette = updateHistory("undo");
    setPaletteParams(palette);
  };

  const redo = () => {
    const palette = updateHistory("redo");
    setPaletteParams(palette);
  };

  return { undo, redo, hasUndo, hasRedo };
};

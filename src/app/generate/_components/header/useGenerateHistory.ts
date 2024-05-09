import { useGenerateStore } from "../../_store/useGenerateStore";
import { useThemeParams } from "../../_utils/params/useThemeParams";

export const useGenerateHistory = () => {
  const setThemeParams = useThemeParams();

  const updateHistory = useGenerateStore((state) => state.updateHistory);
  const history = useGenerateStore((state) => state.history);
  const pointer = useGenerateStore((state) => state.pointer);

  const hasUndo = pointer < history.length - 1;
  const hasRedo = pointer > 0;

  const undo = () => {
    const theme = updateHistory("undo");
    setThemeParams(theme);
  };

  const redo = () => {
    const theme = updateHistory("redo");
    setThemeParams(theme);
  };

  return { undo, redo, hasUndo, hasRedo };
};

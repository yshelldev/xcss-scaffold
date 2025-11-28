import path from "path";
import xcss from "xcss-package"

const sandboxpath = "./sandbox"
const librariespath = "./libraries"
const blueprintpath = "./blueprint"

const __filename = fileURLToPath(import.meta.url);
const __diroot = path.resolve(__filename, '..');

xcss.ScaffoldRedirect("sandbox", path.join(__diroot, sandboxpath))
xcss.ScaffoldRedirect("libraries", path.join(__diroot, librariespath))
xcss.ScaffoldRedirect("blueprint", path.join(__diroot, blueprintpath))
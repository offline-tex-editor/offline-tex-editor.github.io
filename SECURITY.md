# Security policy

## Reporting a vulnerability

Please report vulnerabilities privately through GitHub: **Security → Report a vulnerability** on this repository
([direct link](https://github.com/offline-tex-editor/offline-tex-editor.github.io/security/advisories/new)). Don't open a public issue for a security
problem.

Please include what an attacker can do, the steps to reproduce it, and the version you tested
(`offline-tex-editor --version`). This is a volunteer project, so replies are best effort. Once a fix is released,
the advisory will be published with credit to you, unless you'd rather stay anonymous.

Only the latest release gets security fixes.

## Threat model

The editor is a local, single-user tool with no authentication. It is designed to be safe when:

- it listens on `127.0.0.1` (the default), and
- the user has other browser tabs open on untrusted web sites.

In scope, for example:

- a web page from another site reading project files, writing files, or running git operations through the editor
  (cross-site request forgery, DNS rebinding, clickjacking, cross-origin reads);
- reading, writing, creating, renaming, uploading or deleting files outside the project folder, inside `.git/` or
  `build/`, or of types the editor does not offer;
- command or argument injection into `latexmk`, `synctex`, `texcount` or `git`;
- script injection into the editor page from file names, file contents, git output, LaTeX or BibTeX logs, or
  bibliography entries, and scripts in uploaded files (such as SVG) running in the editor's origin;
- ways around the page's Content-Security-Policy.

Out of scope:

- running with `--host` set to a non-loopback address without an authenticating proxy in front (the
  documentation and the start-up warning say not to);
- anything a LaTeX project itself can do when compiled (`.latexmkrc` is Perl code, and `\write18` when shell
  escape is enabled). Compiling a project means trusting it, as with any LaTeX toolchain;
- other users on the same multi-user machine who can connect to the loopback port.

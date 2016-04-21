// Type definitions for Google Apps Script 2016-04-21
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare module GoogleAppsScript {
  export module HTML {
    /**
     * An HtmlOutput object that can be served from a script. Due to security considerations,
     *  scripts cannot directly return HTML to a browser. Instead, they must sanitize it so that it
     *  cannot perform malicious actions. You can return sanitized HTML like this:
     * 
     *      function doGet() {
     *        return HtmlService.createHtmlOutput('<b>Hello, world!</b>');
     *      }
     * 
     * HtmlOutput
     * Google Caja
     * guide to restrictions in HTML service
     */
    export interface HtmlOutput {
      addMetaTag(name: string, content: string): HtmlOutput;
      append(addedContent: string): HtmlOutput;
      appendUntrusted(addedContent: string): HtmlOutput;
      asTemplate(): HtmlTemplate;
      clear(): HtmlOutput;
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getContent(): string;
      getFaviconUrl(): string;
      getHeight(): Integer;
      getMetaTags(): HtmlOutputMetaTag[];
      getTitle(): string;
      getWidth(): Integer;
      setContent(content: string): HtmlOutput;
      setFaviconUrl(iconUrl: string): HtmlOutput;
      setHeight(height: Integer): HtmlOutput;
      setSandboxMode(mode: SandboxMode): HtmlOutput;
      setTitle(title: string): HtmlOutput;
      setWidth(width: Integer): HtmlOutput;
    }

    /**
     * An object that represents a meta tag added to the page by calling
     *  HtmlOutput.addMetaTag(name, content).
     * 
     *      var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
     *      output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
     *     
     *      var tags = output.getMetaTags();
     *      Logger.log('<meta name="%s" content="%s"/>', tags[0].getName(), tags[0].getContent());
     */
    export interface HtmlOutputMetaTag {
      getContent(): string;
      getName(): string;
    }

    /**
     * Service for returning HTML and other text content from a script.
     * 
     * Due to security considerations, scripts cannot directly return content to a browser. Instead,
     *  they must sanitize the HTML so that it cannot perform malicious actions. See the description of
     *  HtmlOutput for what limitations this implies on what can be returned.
     */
    export interface HtmlService {
      SandboxMode: SandboxMode
      createHtmlOutput(): HtmlOutput;
      createHtmlOutput(blob: Base.BlobSource): HtmlOutput;
      createHtmlOutput(html: string): HtmlOutput;
      createHtmlOutputFromFile(filename: string): HtmlOutput;
      createTemplate(blob: Base.BlobSource): HtmlTemplate;
      createTemplate(html: string): HtmlTemplate;
      createTemplateFromFile(filename: string): HtmlTemplate;
      getUserAgent(): string;
    }

    /**
     * A template object for dynamically constructing HTML. For more information, see the
     *  guide to templates.
     */
    export interface HtmlTemplate {
      evaluate(): HtmlOutput;
      getCode(): string;
      getCodeWithComments(): string;
      getRawContent(): string;
    }

    /**
     * An enum representing the sandbox modes that can be used for client-side HtmlService
     *  scripts. These values can be accessed from HtmlService.SandboxMode, and set by calling
     *  HtmlOutput.setSandboxMode(mode).
     * 
     *  Warning: the NATIVE and EMULATED modes were
     *  deprecated on October 13, 2015.
     *  We recommend the use of IFRAME only going forward.
     * 
     * To protect users from being served malicious HTML or JavaScript, client-side code served from
     *  HTML service executes in a security sandbox that imposes restrictions on the code. The method
     *  HtmlOutput.setSandboxMode(mode) allows script authors to choose between
     *  different versions of the sandbox. For more information, see the
     *  guide to restrictions in HTML service.
     * If a new script does not set a sandbox mode, Apps Script uses IFRAME mode as the
     *  default. Scripts created prior to November 2015 default to using NATIVE mode;
     *  however, after April 28th 2016 all scripts will default to IFRAME. The default is subject
     *  to change.
     * The IFRAME mode imposes many fewer restrictions than the other sandbox modes and runs
     *  fastest, but does not work at all in certain older browsers, including Internet Explorer 9.
     * 
     *      // Serve HTML with a defined sandbox mode (in Apps Script server-side code).
     *      var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
     *      output.setSandboxMode(HtmlService.SandboxMode.IFRAME);
     * 
     * google.script.sandbox.mode
     * 
     *      <!-- Read the sandbox mode (in a client-side script). -->
     *      <script>
     *        alert(google.script.sandbox.mode);
     *      </script>
     */
    export enum SandboxMode { EMULATED, IFRAME, NATIVE }

  }
}

declare var HtmlService: GoogleAppsScript.HTML.HtmlService;
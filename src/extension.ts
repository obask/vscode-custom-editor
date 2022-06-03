import * as vscode from 'vscode';
import { CatScratchEditorProvider } from './catScratchEditor';
import { MdxEditorProvider } from './mdxEditor';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(CatScratchEditorProvider.register(context));
	context.subscriptions.push(MdxEditorProvider.register(context));
}

(function() {var implementors = {};
implementors["arena"] = [{"text":"impl Copy for RawId","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Copy for Idx&lt;T&gt;","synthetic":false,"types":[]}];
implementors["assists"] = [{"text":"impl Copy for InsertUseConfig","synthetic":false,"types":[]},{"text":"impl Copy for DefaultMethods","synthetic":false,"types":[]},{"text":"impl Copy for AssistKind","synthetic":false,"types":[]},{"text":"impl Copy for AssistId","synthetic":false,"types":[]}];
implementors["base_db"] = [{"text":"impl Copy for SourceRootId","synthetic":false,"types":[]},{"text":"impl Copy for CrateId","synthetic":false,"types":[]},{"text":"impl Copy for ProcMacroId","synthetic":false,"types":[]},{"text":"impl Copy for ProcMacroKind","synthetic":false,"types":[]},{"text":"impl Copy for Edition","synthetic":false,"types":[]},{"text":"impl Copy for FilePosition","synthetic":false,"types":[]},{"text":"impl Copy for FileRange","synthetic":false,"types":[]}];
implementors["completion"] = [{"text":"impl Copy for CompletionScore","synthetic":false,"types":[]},{"text":"impl Copy for CompletionItemKind","synthetic":false,"types":[]},{"text":"impl Copy for InsertTextFormat","synthetic":false,"types":[]}];
implementors["hir"] = [{"text":"impl Copy for Crate","synthetic":false,"types":[]},{"text":"impl Copy for Module","synthetic":false,"types":[]},{"text":"impl Copy for ModuleDef","synthetic":false,"types":[]},{"text":"impl Copy for Field","synthetic":false,"types":[]},{"text":"impl Copy for Struct","synthetic":false,"types":[]},{"text":"impl Copy for Union","synthetic":false,"types":[]},{"text":"impl Copy for Enum","synthetic":false,"types":[]},{"text":"impl Copy for Variant","synthetic":false,"types":[]},{"text":"impl Copy for Adt","synthetic":false,"types":[]},{"text":"impl Copy for VariantDef","synthetic":false,"types":[]},{"text":"impl Copy for DefWithBody","synthetic":false,"types":[]},{"text":"impl Copy for Function","synthetic":false,"types":[]},{"text":"impl Copy for Const","synthetic":false,"types":[]},{"text":"impl Copy for Static","synthetic":false,"types":[]},{"text":"impl Copy for Trait","synthetic":false,"types":[]},{"text":"impl Copy for TypeAlias","synthetic":false,"types":[]},{"text":"impl Copy for MacroDef","synthetic":false,"types":[]},{"text":"impl Copy for AssocItem","synthetic":false,"types":[]},{"text":"impl Copy for GenericDef","synthetic":false,"types":[]},{"text":"impl Copy for Local","synthetic":false,"types":[]},{"text":"impl Copy for Label","synthetic":false,"types":[]},{"text":"impl Copy for GenericParam","synthetic":false,"types":[]},{"text":"impl Copy for TypeParam","synthetic":false,"types":[]},{"text":"impl Copy for LifetimeParam","synthetic":false,"types":[]},{"text":"impl Copy for ConstParam","synthetic":false,"types":[]},{"text":"impl Copy for Impl","synthetic":false,"types":[]},{"text":"impl Copy for Namespace","synthetic":false,"types":[]}];
implementors["hir_def"] = [{"text":"impl&lt;'a&gt; Copy for AttrQuery&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Copy for Mutability","synthetic":false,"types":[]},{"text":"impl Copy for Rawness","synthetic":false,"types":[]},{"text":"impl Copy for Signedness","synthetic":false,"types":[]},{"text":"impl Copy for IntBitness","synthetic":false,"types":[]},{"text":"impl Copy for FloatBitness","synthetic":false,"types":[]},{"text":"impl Copy for BuiltinInt","synthetic":false,"types":[]},{"text":"impl Copy for BuiltinFloat","synthetic":false,"types":[]},{"text":"impl Copy for BuiltinType","synthetic":false,"types":[]},{"text":"impl Copy for PerNs","synthetic":false,"types":[]},{"text":"impl Copy for ItemInNs","synthetic":false,"types":[]},{"text":"impl&lt;K, V, P&gt; Copy for Key&lt;K, V, P&gt;","synthetic":false,"types":[]},{"text":"impl Copy for RawVisibilityId","synthetic":false,"types":[]},{"text":"impl Copy for GenericParamsId","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;ItemTreeNode&gt; Copy for FileItemTreeId&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl Copy for ModItem","synthetic":false,"types":[]},{"text":"impl Copy for AssocItem","synthetic":false,"types":[]},{"text":"impl Copy for StructKind","synthetic":false,"types":[]},{"text":"impl Copy for TypeParamProvenance","synthetic":false,"types":[]},{"text":"impl Copy for LangItemTarget","synthetic":false,"types":[]},{"text":"impl Copy for BinaryOp","synthetic":false,"types":[]},{"text":"impl Copy for LogicOp","synthetic":false,"types":[]},{"text":"impl Copy for CmpOp","synthetic":false,"types":[]},{"text":"impl Copy for Ordering","synthetic":false,"types":[]},{"text":"impl Copy for ArithOp","synthetic":false,"types":[]},{"text":"impl Copy for BindingAnnotation","synthetic":false,"types":[]},{"text":"impl Copy for SyntheticSyntax","synthetic":false,"types":[]},{"text":"impl Copy for ModuleOrigin","synthetic":false,"types":[]},{"text":"impl Copy for Visibility","synthetic":false,"types":[]},{"text":"impl Copy for PrefixKind","synthetic":false,"types":[]},{"text":"impl Copy for ModuleId","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;ItemTreeNode&gt; Copy for ItemLoc&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;ItemTreeNode&gt; Copy for AssocItemLoc&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl Copy for FunctionId","synthetic":false,"types":[]},{"text":"impl Copy for StructId","synthetic":false,"types":[]},{"text":"impl Copy for UnionId","synthetic":false,"types":[]},{"text":"impl Copy for EnumId","synthetic":false,"types":[]},{"text":"impl Copy for EnumVariantId","synthetic":false,"types":[]},{"text":"impl Copy for FieldId","synthetic":false,"types":[]},{"text":"impl Copy for ConstId","synthetic":false,"types":[]},{"text":"impl Copy for StaticId","synthetic":false,"types":[]},{"text":"impl Copy for TraitId","synthetic":false,"types":[]},{"text":"impl Copy for TypeAliasId","synthetic":false,"types":[]},{"text":"impl Copy for ImplId","synthetic":false,"types":[]},{"text":"impl Copy for TypeParamId","synthetic":false,"types":[]},{"text":"impl Copy for LifetimeParamId","synthetic":false,"types":[]},{"text":"impl Copy for ConstParamId","synthetic":false,"types":[]},{"text":"impl Copy for ContainerId","synthetic":false,"types":[]},{"text":"impl Copy for AssocContainerId","synthetic":false,"types":[]},{"text":"impl Copy for AdtId","synthetic":false,"types":[]},{"text":"impl Copy for GenericParamId","synthetic":false,"types":[]},{"text":"impl Copy for ModuleDefId","synthetic":false,"types":[]},{"text":"impl Copy for DefWithBodyId","synthetic":false,"types":[]},{"text":"impl Copy for AssocItemId","synthetic":false,"types":[]},{"text":"impl Copy for GenericDefId","synthetic":false,"types":[]},{"text":"impl Copy for AttrDefId","synthetic":false,"types":[]},{"text":"impl Copy for VariantId","synthetic":false,"types":[]}];
implementors["hir_expand"] = [{"text":"impl&lt;N:&nbsp;AstNode&gt; Copy for FileAstId&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl Copy for DiagnosticCode","synthetic":false,"types":[]},{"text":"impl Copy for BuiltinDeriveExpander","synthetic":false,"types":[]},{"text":"impl Copy for BuiltinFnLikeExpander","synthetic":false,"types":[]},{"text":"impl Copy for EagerExpander","synthetic":false,"types":[]},{"text":"impl Copy for ProcMacroExpander","synthetic":false,"types":[]},{"text":"impl Copy for HirFileId","synthetic":false,"types":[]},{"text":"impl Copy for MacroFile","synthetic":false,"types":[]},{"text":"impl Copy for MacroCallId","synthetic":false,"types":[]},{"text":"impl Copy for LazyMacroId","synthetic":false,"types":[]},{"text":"impl Copy for EagerMacroId","synthetic":false,"types":[]},{"text":"impl Copy for MacroDefId","synthetic":false,"types":[]},{"text":"impl Copy for MacroDefKind","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for InFile&lt;T&gt;","synthetic":false,"types":[]}];
implementors["hir_ty"] = [{"text":"impl Copy for IntTy","synthetic":false,"types":[]},{"text":"impl Copy for FloatTy","synthetic":false,"types":[]},{"text":"impl Copy for FnTrait","synthetic":false,"types":[]},{"text":"impl Copy for TyFingerprint","synthetic":false,"types":[]},{"text":"impl Copy for LookupMode","synthetic":false,"types":[]},{"text":"impl Copy for ImplTraitLoweringMode","synthetic":false,"types":[]},{"text":"impl Copy for CallableDefId","synthetic":false,"types":[]},{"text":"impl Copy for TyDefId","synthetic":false,"types":[]},{"text":"impl Copy for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl Copy for InferTy","synthetic":false,"types":[]},{"text":"impl Copy for DisplayTarget","synthetic":false,"types":[]},{"text":"impl Copy for GlobalTypeParamId","synthetic":false,"types":[]},{"text":"impl Copy for InternedOpaqueTyId","synthetic":false,"types":[]},{"text":"impl Copy for ClosureId","synthetic":false,"types":[]},{"text":"impl Copy for InternedCallableDefId","synthetic":false,"types":[]},{"text":"impl Copy for TypeCtor","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for Binders&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Copy for TyKind","synthetic":false,"types":[]},{"text":"impl Copy for OpaqueTyId","synthetic":false,"types":[]}];
implementors["ide"] = [{"text":"impl Copy for SymbolKind","synthetic":false,"types":[]},{"text":"impl Copy for Severity","synthetic":false,"types":[]},{"text":"impl Copy for Highlight","synthetic":false,"types":[]},{"text":"impl Copy for HlMods","synthetic":false,"types":[]},{"text":"impl Copy for HlTag","synthetic":false,"types":[]},{"text":"impl Copy for HlMod","synthetic":false,"types":[]},{"text":"impl Copy for HlPunct","synthetic":false,"types":[]},{"text":"impl Copy for HlRange","synthetic":false,"types":[]}];
implementors["ide_db"] = [{"text":"impl Copy for LineCol","synthetic":false,"types":[]},{"text":"impl Copy for FileSymbolKind","synthetic":false,"types":[]},{"text":"impl Copy for Definition","synthetic":false,"types":[]},{"text":"impl Copy for ReferenceAccess","synthetic":false,"types":[]},{"text":"impl Copy for TryEnum","synthetic":false,"types":[]},{"text":"impl Copy for MergeBehavior","synthetic":false,"types":[]},{"text":"impl Copy for SnippetCap","synthetic":false,"types":[]}];
implementors["parser"] = [{"text":"impl Copy for SyntaxKind","synthetic":false,"types":[]},{"text":"impl Copy for Token","synthetic":false,"types":[]},{"text":"impl Copy for FragmentKind","synthetic":false,"types":[]}];
implementors["proc_macro_api"] = [{"text":"impl Copy for ProcMacroKind","synthetic":false,"types":[]}];
implementors["profile"] = [{"text":"impl Copy for MemoryUsage","synthetic":false,"types":[]},{"text":"impl Copy for Bytes","synthetic":false,"types":[]}];
implementors["project_model"] = [{"text":"impl Copy for TargetKind","synthetic":false,"types":[]}];
implementors["rust_analyzer"] = [{"text":"impl Copy for Verbosity","synthetic":false,"types":[]}];
implementors["syntax"] = [{"text":"impl Copy for Token","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Copy&gt; Copy for InsertPosition&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Copy for CommentKind","synthetic":false,"types":[]},{"text":"impl Copy for CommentShape","synthetic":false,"types":[]},{"text":"impl Copy for CommentPlacement","synthetic":false,"types":[]},{"text":"impl Copy for Radix","synthetic":false,"types":[]},{"text":"impl Copy for SelfParamKind","synthetic":false,"types":[]},{"text":"impl Copy for PrefixOp","synthetic":false,"types":[]},{"text":"impl Copy for BinOp","synthetic":false,"types":[]},{"text":"impl Copy for RangeOp","synthetic":false,"types":[]},{"text":"impl Copy for IndentLevel","synthetic":false,"types":[]}];
implementors["test_utils"] = [{"text":"impl Copy for RangeOrOffset","synthetic":false,"types":[]}];
implementors["tt"] = [{"text":"impl Copy for TokenId","synthetic":false,"types":[]},{"text":"impl Copy for Delimiter","synthetic":false,"types":[]},{"text":"impl Copy for DelimiterKind","synthetic":false,"types":[]},{"text":"impl Copy for Punct","synthetic":false,"types":[]},{"text":"impl Copy for Spacing","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Copy for Cursor&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["vfs"] = [{"text":"impl&lt;'a&gt; Copy for AnchoredPath&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Copy for FileId","synthetic":false,"types":[]},{"text":"impl Copy for ChangeKind","synthetic":false,"types":[]}];
implementors["xtask"] = [{"text":"impl Copy for Mode","synthetic":false,"types":[]},{"text":"impl Copy for ClientOpt","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
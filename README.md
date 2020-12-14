ionic-angular-ngrx-libraries

# Project setup notes
- Add to tsconfig.json in root project. This seems to solve DI issues with modules.
    "@angular/*": ["./node_modules/@angular/*"]

- Use these compiler options in libraries that will use NgRx (might not need this.).     
    "angularCompilerOptions": {
        "skipTemplateCodegen": true,
        "strictMetadataEmit": true,
        "fullTemplateTypeCheck": true,
        "strictInjectionParameters": false,
        "enableResourceInlining": true
    },
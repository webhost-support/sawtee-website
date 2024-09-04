<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class GeneratePageTemplates extends Command
{
    protected $signature = 'generate:page-templates';
    protected $description = 'Generate a JS array of page templates';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Path to the Pages folder
        $path = resource_path('js/Pages/Frontend/Pages');

        // Get all filenames without extension
        $files = collect(File::files($path))->map(function ($file) {
            return pathinfo($file->getFilename(), PATHINFO_FILENAME);
        });

        // Convert to JS array format
        $output = 'export const pageTemplates = [' . PHP_EOL;
        foreach ($files as $file) {
            $output .= "  '{$file}'," . PHP_EOL;
        }
        $output .= '];' . PHP_EOL;

        // Path to save the output file
        $outputPath = resource_path('js/lib/pageTemplates.js');

        // Save to a file
        File::put($outputPath, $output);

        $this->info('Page templates array generated successfully!');
    }
}

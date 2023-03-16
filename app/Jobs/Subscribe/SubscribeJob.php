<?php

namespace App\Jobs\Subscribe;

use App\Mail\Subscribe\SubscribeMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Mail;

class SubscribeJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The email address of the subscriber.
     *
     * @var string
     */
    public $mail;

    /**
     * Create a new job instance.
     *
     * @param string $mail The email address of the subscriber.
     */
    public function __construct($mail)
    {
        $this->mail = $mail;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(): void
    {
        try {
            // Send a confirmation email to the subscriber using the `Mail` facade and the `SubscribeMail` Mailable class.
            Mail::to($this->mail)->send(new SubscribeMail());
        } catch (\Throwable $e) {
            // Log the error message and stack trace to help diagnose the issue.
            Log::error(
                'Failed to send confirmation email to subscriber: ' .
                    $e->getMessage(),
                ['exception' => $e]
            );
        }
    }
}

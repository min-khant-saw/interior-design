<?php

namespace App\Mail\Subscribe;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubscribeMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        // This method returns an Envelope instance, which represents the message envelope. 
        // It contains information about the email's recipient, sender, subject, etc.
        return new Envelope(
            subject: 'Thanks for subscription.',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        // This method returns a Content instance, which represents the message content. 
        // In this case, it's a markdown template that will be used to render the email's body.
        return new Content(
            markdown: 'email.subscribe',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        // This method returns an array of Attachment instances. 
        // Attachments can be files or other resources that are attached to the email message.
        // In this case, there are no attachments, so an empty array is returned.
        return [];
    }
}
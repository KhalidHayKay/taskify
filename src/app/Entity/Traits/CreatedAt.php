<?php

declare(strict_types=1);

namespace App\Entity\Traits;

use DateTime;
use Doctrine\ORM\Mapping\PrePersist;

trait CreatedAt
{
    #[PrePersist]
	public function makeCreatedAt()
	{
        if(! isset($this->createdAt)) {
            $this->createdAt = new DateTime(date('d-m-Y h:i A'));
        }
	}
}
using System;
using API.Helpers;

namespace API.Interfaces;

public class MessageParams : PagingParams
{
    public string? MemberId { get; set; }

    public string Container { get; set; } = "Inbox";
}
